const HUBSPOT_FORM_API_KEY = '22b0d541-da12-4cfa-afd9-deffd1e3db9a';
const HUBSPOT_PORTAL_ID = '242864031';
const HUBSPOT_API_KEY = '';

export const fetchContactsCount = async (baseCount) => {
  try {
    const response = await fetch(
      `https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=${HUBSPOT_API_KEY}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const data = await response.json();
    const actualCount = data.contacts?.length || 0;
    return baseCount + actualCount;
  } catch (error) {
    console.error('Error fetching contacts count:', error);
    return baseCount;
  }
};

export const submitToHubSpot = async (formData) => {
  try {
    const fields = [{ name: "email", value: formData.email }];

    if (formData.phone.trim()) {
      fields.push({ name: "mobilephone", value: formData.phone });
    }

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields }),
      }
    );

    if (!response.ok) throw new Error("Failed to submit form");
    return true;
  } catch (error) {
    console.error("Error submitting to HubSpot:", error);
    return false;
  }
}; 