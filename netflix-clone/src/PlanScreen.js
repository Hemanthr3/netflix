import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPlan, setplan } from "./features/planSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import "./PlanScreen.css";

const PlanScreen = () => {
  const [products, setProducts] = useState();
  const [subscription, setSubscription] = useState(null);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const currentPlan = useSelector(selectPlan);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot?.forEach(async (subscription) => {
          setSubscription({
            role: subscription?.data().role,
            current_period_end: subscription?.data().current_period_end.seconds,
            current_period_start:
              subscription?.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);

  console.log("subs",subscription)

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error occurred: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51MPfeKSEE7PbWo9TchPkT3Yf33KQjfOh5Nt0ZAdsTfEUcvARz75lg6ZmqM29rpNPq5deg8z8gNav0LdsEeuZeiYq00Ik4G9ABv"
        );

        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  useEffect(() => {
    dispatch(
      setplan({
        plan: subscription?.role,
      })
    );
  }, [subscription]);

  return (
    <div className="planScreen">
      <br />
      {subscription && (
        <p>
          Renewal date:
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {products &&
        Object.entries(products).map(([productId, productData]) => {
          const isCurrentPackage = productData.name?.includes(
            subscription?.role
          );
          console.log(isCurrentPackage);

          return (
            <div
              key={productId}
              className={`${
                isCurrentPackage && "planScreen_plan--disabled"
              } planScreen_plan`}
            >
              <div className="planScreen_info">
                <h5>{productData.name}</h5>
                <h6>{productData.description}</h6>
              </div>
              <button
                onClick={() =>
                  !isCurrentPackage && loadCheckout(productData.prices.priceId)
                }
              >
                {isCurrentPackage ? "Current Package" : "Subscribe"}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default PlanScreen;
