import msg from "../utils/message";
const subscriptions = new Map<string, Array<(params: any) => void>>();

export const on = (topic: string, fn: any) => {
  const currentSubscriptions = subscriptions.get(topic) || [];
  currentSubscriptions.push(fn);
  subscriptions.set(topic, currentSubscriptions);
};

type emitterType = <T>(topic: string, message: T) => void;

export const emit: emitterType = (topic, message) => {
  // msg.info({ topic, message });
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
