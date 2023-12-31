import { parse } from 'node:url';

const allRoutes = {
  '/heroes:get': (request, response) => {
    response.write('GET')
    response.end()
  },
  default: (request, response) => {
    response.write('hello')
    response.end()
  }
}

function handler(request, response) {
  const { url, method } = request;

  const { pathname } = parse(url, true);

  const key = `${pathname}:${method.toLowerCase()}`
  console.log({key})
  const chosen = allRoutes[key] || allRoutes.default;

  return chosen(request, response)
}

export default handler;