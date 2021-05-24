const USER_SERVICE_ENDPOINT = 'http://localhost:3000';
const MESSAGE_SERVICE_ENDPOINT = 'http://localhost:3001';

export async function getUser(username) {
  const response = await fetch(`${USER_SERVICE_ENDPOINT}/users/by-username/${username}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'User not found.');
  }
  return data;
}

export async function getAllMessages(condtion) {
  const response = await fetch(`${MESSAGE_SERVICE_ENDPOINT}/message`, {
    method: 'POST',
    body: JSON.stringify(condtion),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'No message found.');
  }
  return data;
}

export async function markAsRead(id) {
  const response = await fetch(`${MESSAGE_SERVICE_ENDPOINT}/message/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      messageIsRead: true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Message not send');
  }

  return data;
}


export async function getMessageById(id) {
  const response = await fetch(`${MESSAGE_SERVICE_ENDPOINT}/message/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'No message found.');
  }
  return data;
}

export async function sendMessage(message) {
  const response = await fetch(`${MESSAGE_SERVICE_ENDPOINT}/message/send`, {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Message not send');
  }
  return data;
}


export async function addReply(reply) {
  const response = await fetch(`${MESSAGE_SERVICE_ENDPOINT}/reply`, {
    method: 'POST',
    body: JSON.stringify(reply),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Message not send');
  }
  return data;
}

export async function fetchRepliesByMessageId(message_id) {
  const response = await fetch(`${MESSAGE_SERVICE_ENDPOINT}/reply?message_id=${message_id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Message not send');
  }
  return data;
}
