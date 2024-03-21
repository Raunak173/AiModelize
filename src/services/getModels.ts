export const getModels=async()=> {
  try {
    const response = await fetch('https://mocki.io/v1/48f3f4cc-c2d0-43dc-8118-48afac84e019');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data?.models;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
