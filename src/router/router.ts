import { Router } from 'express'

class RouterEngine {
  private router : Map<string, Router> = new Map<string, Router>()

  public registerRouters (route : string, router : Router) : void {
    this.router.set(route, router)
  }

  public getRouters () {
    return this.router
  }
}

export default RouterEngine
