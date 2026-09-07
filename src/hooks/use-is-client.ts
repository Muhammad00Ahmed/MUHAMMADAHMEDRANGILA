import { useSyncExternalStore } from "react";

/** No client-side source of truth to subscribe to; the snapshot never changes. */
const subscribe = () => () => {};

/**
 * True once the component has hydrated on the client.
 *
 * Backed by useSyncExternalStore rather than a state update in an effect, so
 * React resolves the server/client difference during hydration instead of
 * scheduling a second render pass.
 */
export function useIsClient() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
