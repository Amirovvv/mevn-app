export function subs(value) {
    if (value.length < 16) {
        return value
    } else {
        return value.substring(0, 16) + ".."
    }
}