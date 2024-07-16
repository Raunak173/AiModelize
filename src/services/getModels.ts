export const getModels=async()=> {
  try {
    const response = await fetch('https://aimodelize-server-production.up.railway.app/models');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const getFaeturedModels=async()=> {
  try {
    const response = await fetch('https://aimodelize-server-production.up.railway.app/featured/models');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

