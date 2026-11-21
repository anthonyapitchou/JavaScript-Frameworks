
export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <section className="max-w-3xl text-center">
        <h1 className="text-3xl text-black md:text-4xl font-normal tracking-widest mb-12">
          ABOUT US
        </h1>

        <div className="space-y-6 text-base md:text-lg leading-8 text-black">
          <p>
            At Vintage Studio, we believe that fashion is more than just
            following trends. It is about expressing your personality,
            discovering your own style and finding pieces that make you feel
            good.
          </p>

          <p>
            Our collection brings together a mix of timeless vintage-inspired
            designs, contemporary fashion, clothing and accessories. From
            everyday essentials to unique statement pieces, we aim to offer a
            diverse selection to suit different styles and personalities.
          </p>

          <p>
            We also believe that great style doesnt have to come at a high
            price. That is why our collection includes second-hand finds and
            carefully selected pieces, giving pre-loved fashion a new life
            while encouraging a more conscious approach to shopping.
          </p>

          <p>
            Whether you are looking for something classic, casual, bold or
            completely different, Vintage Studio is a place to explore,
            experiment and find something that feels like you.
          </p>
        </div>

        <p className="mt-10 text-sm tracking-widest uppercase text-black">
          Discover your style. Make it timeless.
        </p>
      </section>
    </main>
  );
}
