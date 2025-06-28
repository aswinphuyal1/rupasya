import React from "react";
import Title from "../components/Title";
import make from "../assets/make.png";
import Newsletter from "../components/Newsletter"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Rupasya"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={make} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Rupasya is a beauty brand built for those who believe in looking
            good without spending a fortune. We offer affordable, quality makeup
            and skincare products that enhance natural beauty and fit perfectly
            into everyday routines. Whether you're getting ready for work, a
            celebration, or just embracing self-care, Rupasya has something for
            every moment.
          </p>
          <p>
            Our products are designed with care, combining style, comfort, and
            skin-friendliness. At Rupasya, we believe beauty should feel
            empowering, effortless, and accessible — because everyone deserves
            to feel confident in their own skin.
          </p>
          <b className="text-gray-800">Our motive</b>
          <p>
            Our motive at <b>Rupasya</b> is to make beauty accessible,
            empowering, and affordable for everyone. We aim to provide
            high-quality makeup and skincare products that not only enhance
            appearance but also promote confidence and self-expression — all
            without compromising on price or skin health.
          </p>
        </div>
      </div>
      <div className="text-3xl py-7">
        <Title text1={"why"} text2={"us"} />
        <div className="flex flex-col md:flex-row text-sm">
          <div className="flex flex-col border px-10 md:px-16 py-8 sm:py-20  gap-5">
            <b>Quality Assurance</b>
            <p>
              Rupasya ensures that every product meets high standards of safety
              and performance. From ingredients to packaging, we focus on
              delivering reliable quality that our customers can trust on their
              skin every day
            </p>
          </div>

          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience</b>
            <p>
              Our products are easy to use, beginner-friendly, and perfect for
              daily routines. Whether shopping online or applying on the go,
              Rupasya makes beauty simple and hassle-free.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Cheap price</b>
            <p className="text-gray-600">
              We believe looking good shouldn't be expensive. Rupasya offers
              affordable products without compromising quality, making beauty
              accessible for everyone — especially students and budget-conscious
              buyers.
            </p>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
//