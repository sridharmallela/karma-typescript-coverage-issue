export class Calculator {

    add(a: number, b: number): number {
        return a + b;
    }

    sub(a: number, b: number): number {
        return a - b;
    }

    mul(a: number, b: number): number {
        return a * b;
    }

    div(a: number, b: number): number {
        return a / b;
    }

    rem(a: number, b: number): number {
        return a % b;
    }

    notCovered(): void {
        // this code will not be covered
        this.add(1,2);
        this.sub(1,2);
        this.mul(1,2);
    }
}
