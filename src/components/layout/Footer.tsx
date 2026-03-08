import Link from "next/link";

const calculatorLinks = [
  { label: "칼로리 계산기", href: "/calc/calorie" },
  { label: "기초대사량 계산기", href: "/calc/bmr" },
  { label: "BMI 계산기", href: "/calc/bmi" },
  { label: "체지방 계산기", href: "/calc/body-fat" },
  { label: "적정 체중 계산기", href: "/calc/ideal-weight" },
];

const productLinks = [
  { label: "단백질 보충제", href: "/products?cat=protein" },
  { label: "다이어트 간식", href: "/products?cat=snack" },
  { label: "제로 음료", href: "/products?cat=zero-drink" },
  { label: "곤약/저칼로리", href: "/products?cat=low-cal" },
  { label: "닭가슴살", href: "/products?cat=chicken" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-bold">칼로링</div>
            <p className="mt-2 text-sm text-muted-foreground">
              칼로리 계산, 이제 칼로링.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              다이어트 계산기 & 식품 최저가 비교
            </p>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="text-sm font-semibold">계산기</h3>
            <ul className="mt-3 space-y-2">
              {calculatorLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold">다이어트 식품</h3>
            <ul className="mt-3 space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 칼로링(caloring.kr). All rights reserved.</p>
          <p className="mt-1">
            본 사이트의 계산 결과는 참고용이며 의료 진단을 대체하지 않습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
