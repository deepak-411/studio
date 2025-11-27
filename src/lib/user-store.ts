
'use client';

export type User = {
  name: string;
  rollNumber: string;
  class: string;
  section: string;
};

const USERS_STORAGE_KEY = 'hwhs_users';
const CURRENT_USER_STORAGE_KEY = 'hwhs_currentUser';

// --- User Management ---

export function getStoredUsers(): User[] {
  if (typeof window !== 'undefined') {
    const storedUsers = window.localStorage.getItem(USERS_STORAGE_KEY);
    if (storedUsers) {
      try {
        return JSON.parse(storedUsers);
      } catch (e) {
        console.error("Failed to parse stored users data", e);
        return [];
      }
    }
  }
  return [];
}

export function storeNewUser(user: User): boolean {
  if (typeof window !== 'undefined') {
    const users = getStoredUsers();
    // Check if user with the same roll number already exists
    const userExists = users.some(u => u.rollNumber === user.rollNumber && u.class === user.class && u.section === user.section);
    if (userExists) {
        return false; // Indicate that user was not added
    }
    const updatedUsers = [...users, user];
    window.localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    return true; // Indicate success
  }
  return false;
}

export function findUser(rollNumber: string, className: string, section: string): User | undefined {
    if (typeof window !== 'undefined') {
        const users = getStoredUsers();
        return users.find(u => u.rollNumber === rollNumber && u.class === className && u.section === section);
    }
    return undefined;
}


// --- Session Management ---

export function setCurrentUser(user: User) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(user));
  }
}

export function getCurrentUser(): User | null {
  if (typeof window !== 'undefined') {
    const storedUser = window.localStorage.getItem(CURRENT_USER_STORAGE_KEY);
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch (e) {
        console.error("Failed to parse current user data", e);
        return null;
      }
    }
  }
  return null;
}

export function clearCurrentUser() {
    if (typeof window !== 'undefined') {
        window.localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    }
}
