const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

const paymentApi = stripe => {
  app.get('/stripe', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  app.post('/stripe', (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res));
  });

  return stripe;
};

module.exports = paymentApi;
