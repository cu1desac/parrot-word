/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthorIndexImport } from './routes/author/index'
import { Route as AuthorIdImport } from './routes/author/$id'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AuthorIndexRoute = AuthorIndexImport.update({
  path: '/author/',
  getParentRoute: () => rootRoute,
} as any)

const AuthorIdRoute = AuthorIdImport.update({
  path: '/author/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/author/$id': {
      preLoaderRoute: typeof AuthorIdImport
      parentRoute: typeof rootRoute
    }
    '/author/': {
      preLoaderRoute: typeof AuthorIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AuthorIdRoute,
  AuthorIndexRoute,
])

/* prettier-ignore-end */
