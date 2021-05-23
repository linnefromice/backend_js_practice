export class Calculator {
  public plus({left, right} : {left: number, right: number}) {
    return left + right;
  }

  public minus({left, right} : {left: number, right: number}) {
    return left - right;
  }

  public multiple({left, right} : {left: number, right: number}) {
    return left * right;
  }

  public divide({left, right} : {left: number, right: number}) {
    return left / right;
  }
}