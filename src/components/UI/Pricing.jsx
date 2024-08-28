import React from "react";
import "../../styles/pricing.css";

const Pricing = () => {
  return (
    <section id="pricing-plan">
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            Gym <span className="highlights">Pricing</span> Plan
          </h2>
          <p>
            Explore our flexible gym pricing plans to find the perfect <br />
            fit for your fitness goals and budget. Start today!
          </p>
        </div>

        {/* ===========  pricing wrapper ========== */}

        <div className="pricing__wrapper">
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="pricing__card-top">
              <h2 className="sectio__title">Regular Member</h2>
              <h2 className="pricing section__title">
                $50 <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Access to All Gym Equipment
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard Group Fitness Classes
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Flexible Gym Hours
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Free Fitness Assessment
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Basic Locker Room Access
                </li>

                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>

              <button className="register__btn">Join Now</button>
            </div>
          </div>

          <div
            className="pricing__item pricing__item-02"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="sectio__title">Premium Member</h2>
              <h2 className="pricing section__title">
                $70 <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  All Regular Member Benefits
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited Group Fitness Classes
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Extended Gym Hours Access
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Free Towel Service
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Free Personal Training Session
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Priority Booking for Classes
                </li>
              </ul>

              <button className="register__btn">Join Now</button>
            </div>
          </div>
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="pricing__card-top">
              <h2 className="sectio__title">Standard Member</h2>
              <h2 className="pricing section__title">
                $100 <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  All Premium Member Benefits
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited Personal Training
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Access to Exclusive Classes
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Complimentary Massage Therapy
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Private Locker Room Access
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer Support and Services
                </li>
              </ul>

              <button className="register__btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
