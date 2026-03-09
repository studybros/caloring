import Link from "next/link";

const calculatorLinks = [
  { label: "칼로리 계산기", href: "/calc/calorie" },
  { label: "기초대사량 계산기", href: "/calc/bmr" },
  { label: "BMI 계산기", href: "/calc/bmi" },
  { label: "체지방 계산기", href: "/calc/body-fat" },
  { label: "적정 체중 계산기", href: "/calc/ideal-weight" },
];

const dietLinks = [
  { label: "간헐적 단식", href: "/diet/intermittent-fasting" },
  { label: "1200칼로리 식단", href: "/diet/1200kcal" },
  { label: "고단백 식단", href: "/diet/high-protein" },
  { label: "저탄고지 (키토)", href: "/diet/keto" },
  { label: "전체 가이드", href: "/diet" },
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

          {/* Diet Guides */}
          <div>
            <h3 className="text-sm font-semibold">식단 가이드</h3>
            <ul className="mt-3 space-y-2">
              {dietLinks.map((link) => (
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
