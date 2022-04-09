## Description

The API for executing shell commands.

## Setup

Install dependencies:

```bash
$ npm i
```

## Development

**Option 1: Run the dev server outside of Docker**

```bash
$ npm run start:dev
```

**Option 2: Run the dev server inside Docker container**

```bash
$ docker-compose up
```

Server will be available on address http://localhost:8080

## Test

```bash
$ npm run test
```

## Usage

Endpoint for executing shell commands is available on:
```bash
POST /execute

# Request body example
{
    command: "ls -la"
}
```
