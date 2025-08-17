export function add(a,b){
    a = typeof a === 'string' ? parseInt(a, 10) : a;
    b = typeof b === 'string' ? parseInt(b, 10) : b;
    return a+b;
}