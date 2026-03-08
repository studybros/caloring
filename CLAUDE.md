# 칼로링 (caloring.kr) — 다이어트 계산기 & 식품 최저가 비교

## 프로젝트 개요
- **서비스명**: 칼로링
- **도메인**: caloring.kr
- **슬로건**: "칼로리 계산, 이제 칼로링."
- **타겟**: 2030 여성 (다이어트/건강 관심층)
- **모델**: 채찍단(cowlr.kr) 벤치마크 — 계산기로 SEO 유입 → 다이어트 식품 CPS/CPA 전환
- **핵심 전략**: 계산기 = 트래픽 미끼, 제품 추천 = 수익원

## 수익 구조
1. **CPS (제품 판매 수수료)**: 다이어트 식품 추천 → 구매 링크 (쿠팡파트너스 등)
2. **CPA (상담 DB)**: 다이어트 프로그램/건기식 상담 연결 (디비센스, 텐핑 등)
3. **AdSense**: 페이지 광고
4. **카카오 애드핏**: 네이버/카카오 유입분

## Dev Server
- **포트**: 3021
- `pnpm dev -p 3021`

## 기술 스택
- Next.js 16 (App Router, Static Export/SSG)
- React 19 + TypeScript
- Tailwind CSS 4 + shadcn/ui
- Zod (입력값 검증)
- 배포: Cloudflare Pages
- 백엔드: 없음 (클라이언트 사이드 계산)

## 프로젝트 구조
```
src/
├── app/
│   ├── page.tsx                    # 홈
│   ├── calc/                       # 계산기
│   │   ├── bmi/                    # BMI 계산기
│   │   ├── bmr/                    # 기초대사량
│   │   ├── calorie/                # 칼로리 계산기
│   │   ├── body-fat/               # 체지방 계산기
│   │   └── ideal-weight/           # 적정 체중
│   └── products/                   # 다이어트 식품 비교
├── components/
│   ├── calculator/                 # CalculatorLayout
│   ├── product/                    # 제품 추천 컴포넌트
│   ├── layout/                     # Header, Footer
│   └── ui/                         # shadcn/ui
├── data/
│   ├── trust/                      # 계산기 신뢰 정보
│   └── products/                   # 제품 데이터
└── lib/
    ├── calculators/                # 순수 계산 함수
    ├── seo/                        # 메타태그, schema
    ├── types/                      # 타입 정의
    └── utils/                      # 포맷팅 유틸
```

## SEO 타겟 키워드 (검색량 기준)
| 키워드 | 월간 검색량 | 우선순위 |
|--------|-----------|---------|
| 비만도계산기 | 126,600 | 높음 (but .go.kr 경쟁) |
| 다이어트식단 | 54,100 | 콘텐츠로 공략 |
| 기초대사량계산기 | 37,010 | 최우선 (민간 가능) |
| BMI계산기 | 23,810 | 높음 |
| 표준체중계산기 | 13,490 | 중간 |
| 칼로리계산기 | 12,980 | 최우선 (민간 1위 가능) |
| 체지방계산기 | 6,760 | 중간 |

## 디자인
- 피치(#FFCCBC) + 머스타드(#FFE082) + 차콜(#424242) 팔레트
- 모바일 퍼스트
- 밝고 따뜻한 톤 (여성 타겟)

## 코딩 규칙
- ddukdak과 동일 패턴
- 한국어 UI, 코드/주석 영어
- 계산 로직 lib/calculators/ 분리
- SEO: 모든 페이지 메타 title/description + JSON-LD 필수
- 제품 추천: 계산 결과 직후 배치 (전환율 최적화)
