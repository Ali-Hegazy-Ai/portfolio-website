import { useRouteError, Link } from 'react-router-dom'

interface RouteError {
  statusText?: string
  message?: string
  status?: number
}

const ErrorPage = () => {
  const error = useRouteError() as RouteError

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-8xl font-bold text-gradient">
          {error?.status || '404'}
        </h1>
        
        <p className="text-xl text-muted max-w-md mx-auto">
          {error?.statusText || error?.message || 'Something went wrong'}
        </p>
        
        <div>
          <Link to="/" className="btn-primary inline-block">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
