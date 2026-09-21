# 우리 반 알림 (Classroom Notification App)

Google Sheet 기반의 교사용 알림 관리 웹앱입니다.

## 기능

- **📢 알림 등록**: 교사가 날짜, 제목, 내용을 입력해 알림 등록
- **📋 알림 조회**: 학생들이 최신 알림을 확인
- **🔐 비밀번호 보호**: 교사만 알림 등록 가능
- **📊 Google Sheet 연동**: 데이터를 Sheet에 자동 저장

## 설정 방법

### 1단계: Google Sheet 준비
1. Google Drive에서 새 Sheet 생성
2. 시트 이름을 `Sheet1`로 변경 (또는 Code.gs에서 수정)
3. 첫 줄 헤더 입력:
   - A1: `등록시간`
   - B1: `날짜`
   - C1: `제목`
   - D1: `내용`

### 2단계: Google Apps Script 설정
1. Sheet 메뉴 → 도구 → 스크립트 편집기
2. **Code.gs**에서:
   - `SHEET_ID` = 당신의 Sheet ID (주소에서 `/d/` 다음 부분)
   - `SHEET_NAME` = "Sheet1" (또는 실제 시트 이름)
   - `ADMIN_PASSWORD` = 원하는 비밀번호로 수정
3. **Index.html** 파일 생성 후 제공된 HTML 코드 붙여넣기

### 3단계: 배포
1. 상단 **"배포"** → **"새 배포"**
2. 유형: **웹 앱**
3. 다음 사용자: **"모든 사람"**
4. 배포 후 URL을 학생들에게 공유

## 파일 구조

```
classroom-notification/
├── Code.gs          # Google Apps Script 백엔드
├── Index.html       # 웹 UI 프론트엔드
└── README.md        # 이 파일
```

## 사용 방법

**교사:**
1. 웹앱 열기
2. **등록** 탭 클릭
3. 비밀번호, 날짜, 제목, 내용 입력
4. 등록하기 버튼 클릭

**학생:**
1. 웹앱 주소 열기
2. **조회** 탭에서 최신 알림 확인

## 커스터마이징

- **비밀번호 변경**: Code.gs의 `ADMIN_PASSWORD` 수정
- **디자인 변경**: Index.html의 CSS 수정
- **Sheet 이름 변경**: Code.gs의 `SHEET_NAME` 수정

---

Made with ❤️ by Claude