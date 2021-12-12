const subscriptions = new Map<string, Array<(params: any) => void>>();

export const on = (topic: string, fn: any) => {
  const currentSubscriptions = subscriptions.get(topic) || [];
  currentSubscriptions.push(fn);
  subscriptions.set(topic, currentSubscriptions);
};

export const emit = (topic: string, message: any) => {
  const fns = subscriptions.get(topic) || [];

  fns.forEach((fn) => {
    if (fn) {
      fn(message);
    } else {
      console.warn("Topic not found");
    }
  });
};

export default {
  on,
  emit,
};
