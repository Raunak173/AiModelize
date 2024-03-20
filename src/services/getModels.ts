export const getModels=async()=> {
  try {
    const response = await fetch('http://localhost:3001/models');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
