# Security Policy — Secure Coding Rules

This document defines the secure development practices that all code in this
repository must follow.

## Rules

1. **No hardcoded secrets.** API keys, passwords, and tokens must never appear
   as string literals in source code. Use environment variables instead.
2. **No use of `eval()` or `new Function()`.** Dynamic code execution from
   untrusted input is forbidden.
3. **All SQL/NoSQL queries must use parameterized queries or an ORM.** String
   concatenation to build queries is forbidden (SQL/NoSQL Injection).
4. **All user input must be validated** before being used in file paths,
   shell commands, or database queries.