# 감정 일기장 (Emotion Diary)

하루하루의 소중한 감정을 기록하고 관리하는 간단한 일기장 애플리케이션입니다.

## 주요 기능
- **일기 작성/수정/삭제**: 그날의 감정과 내용을 간편하게 기록할 수 있습니다.
- **감정 필터링**: 기분에 따라 일기를 모아볼 수 있습니다.
- **날짜별 조회**: 월별로 작성된 일기를 리스트 형식으로 볼 수 있습니다.
- **자동 배포**: GitHub Actions를 통해 최신 코드가 자동으로 GitHub Pages에 배포됩니다.

## 🛠 Tech Stack
- **Frontend**: React (v19)
- **Bundler**: Vite
- **Routing**: React Router (v7)
- **Styling**: Vanilla CSS
- **Deployment**: GitHub Actions & GitHub Pages

## 실행 방법

### 의존성 설치
```cmd
npm install
```

### 로컬 개발 서버 실행
```cmd
npm run dev
```

### 빌드 및 배포
본 프로젝트는 GitHub Actions을 사용하도록 설정되어 있습니다. `main` 브랜치에 코드를 `push`하면 자동으로 빌드 및 배포가 수행됩니다.

## 배포 주소
[https://toran1678.github.io/emotion-diary/](https://toran1678.github.io/emotion-diary/)
