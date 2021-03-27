export function subs(value) {
    if (value.length < 20) {
        return value
    } else {
        return value.substring(0, 20) + ".."
    }
}