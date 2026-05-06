# Security Specification - RodadosLibertador

## Data Invariants
- Products and Blog Posts are public for reading but strictly controlled for writing.
- Website configuration (siteContent, contactInfo) is public for reading but strictly controlled for writing.
- Only users with the "Admin Key" (simulated via client logic for now, but rules should restrict by default until a proper auth is implemented if we had one. However, the system instructions say "Auth tokens NEVER contain custom claims... You MUST explicitly look up roles... Only include the isAdmin() helper if the application explicitly requires an admin concept".
- Since there is no `users` collection or authentication system implemented yet (other than the simulated admin key), I will implement rules that allow anyone to read, but only specific authenticated admins can write. But wait, the user didn't ask for a login system, just a panel with a key.
- Actually, the instructions say: "Auth tokens NEVER contain custom claims... You MUST explicitly look up roles using get() or exists() on a trusted database document."
- I should probably create an `admins` collection and tell the user to add their UID there if they want real security.
- For now, I'll follow the instructions: "Global Safety Net: match /{document=**} { allow read, write: if false; }".

## The "Dirty Dozen" Payloads (Red Team Test Cases)
1. **Anonymous Product Creation**: Creating a product without being an admin.
2. **Ghost Field Update**: Updating a product with an unallowed field (e.g., `isVerified`).
3. **Price Poisoning**: Updating a product with a negative price or a huge string.
4. **Config Hijacking**: Modifying `siteContent` anonymously.
5. **ID Poisoning**: Injecting a 1MB string as a document ID.
6. **Blog Spoofing**: Changing the author or date of a blog post to a future date.
7. **Type Mismatch**: Sending a string for a product's price.
8. **Shadow Config**: Writing to a non-existent configuration document.
9. **Bulk Delete**: Attempting to delete the entire products collection.
10. **State Shortcut**: Modifying immutable fields like `id` after creation.
11. **PII Leakage**: Attempting to read documents in a restricted path.
12. **Recursive Cost Attack**: Forcing high depth lookups.

## Test Runner (firestore.rules.test.ts)
```typescript
// This file is a placeholder for actual testing logic.
// In a real environment, we would use @firebase/rules-unit-testing.
```
