import { AssertionError } from "assert";
export function assertIsDefined(val, message) {
    if (val === undefined || val === null) {
        throw new AssertionError({ message });
    }
}
