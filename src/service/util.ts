export async function fetch<T>(callback: () => Promise<any>) {
  try {
    const response = await callback();
    return response as T;
  } catch (error) {
    throw error;
  }
}
