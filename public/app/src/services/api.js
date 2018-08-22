const baseApiUrl = 'https://us-central1-react-todo-7f184.cloudfunctions.net/api/subjects';

export default {
  updateSubject(subject) {
    return fetch(`${baseApiUrl}/${subject.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(subject)
    });
  },

  removeSubject(id) {
    return fetch(`${baseApiUrl}/${id}`, {method: 'DELETE'});
  },

  createSubject(subject) {
    return fetch(`${baseApiUrl}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(subject)
    });
  }
}
