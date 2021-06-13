const subscriptions = new Map();

export const subscribe = (topic, fn) => {
  const currentSubscriptions = subscriptions.get(topic) || [];
  currentSubscriptions.push(fn);
  subscriptions.set(topic, currentSubscriptions);
};

export const publish = (topic, message) => {
  const fns = subscriptions.get(topic);
  fns.forEach((fn) => {
    if (fn) {
      fn(message);
    } else {
      console.warn('Topic not found');
    }
  });
};

export default {
  subscribe,
  publish,
};
