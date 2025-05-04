export function Log(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;
  descriptor.value = async function (...args: any[]) {
    console.log(`[LOG] Calling ${propertyKey} with`, args);
    const result = await original.apply(this, args);
    console.log(`[LOG] ${propertyKey} returned`, result);
    return result;
  };
}
