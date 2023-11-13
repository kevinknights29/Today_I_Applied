# I Applied Today - Data Model

## Tables

### users

description: user information.

- id (integer, primary key)
- username (string)
- name (string)
- email (string)
- password (string)
- created_at (timestamp)
- last_update_at (timestamp)

### jobs

description: job information.

- id (integer, primary key)
- user_id (integer, foreign key references users.id)
- role (string)
- company (string)
- url (text)
- location (text)
- created_at (timestamp)
- last_update_at (timestamp)

### tags

description: tag which categorizes jobs listed.

- id (integer, primary key)
- user_id (integer, foreign key references users.id)
- job_id (integer, foreign key references jobs.id)
- tags (string)
- created_at (timestamp)
- last_update_at (timestamp)

### applications

description: users who applied to a listed job.

- id (integer, primary key)
- user_id (integer, foreign key references users.id)
- job_id (integer, foreign key references jobs.id)
- created_at (timestamp)

### reactions

description: users reaction to a listed job.

- id (integer, primary key)
- user_id (integer, foreign key references users.id)
- job_id (integer, foreign key references jobs.id)
- type (string) # like or dislike
- created_at (timestamp)
- last_update_at (timestamp)

### comments

description: users comments to a listed job.

- id (integer, primary key)
- user_id (integer, foreign key references users.id)
- job_id (integer, foreign key references jobs.id)
- content (text)
- created_at (datetime)
- last_update_at (datetime)
