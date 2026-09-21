// ===== 설정 =====
const SHEET_ID = "여기에_새_Sheet_ID_붙여넣기";
const SHEET_NAME = "Sheet1";
const ADMIN_PASSWORD = "1234";

// ===== 웹 앱 로드 =====
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// ===== 알림 등록 =====
function addNotification(password, date, title, content) {
  if (password !== ADMIN_PASSWORD) {
    return { success: false, message: "비밀번호가 틀렸습니다." };
  }

  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);

    const timestamp = new Date().toLocaleString('ko-KR');
    sheet.appendRow([timestamp, date, title, content]);

    return { success: true, message: "알림이 등록되었습니다." };
  } catch (e) {
    return { success: false, message: "오류: " + e.message };
  }
}

// ===== 알림 조회 =====
function getNotifications() {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    const range = sheet.getDataRange();
    const values = range.getValues();

    const result = [];

    for (let i = 1; i < values.length; i++) {
      if (values[i][2] && values[i][3]) {
        result.push({
          date: values[i][1] ? values[i][1].toString() : "",
          title: values[i][2].toString(),
          content: values[i][3].toString()
        });
      }
    }

    return result.reverse();
  } catch (e) {
    return [{ date: "오류", title: "데이터 읽기 실패", content: e.message }];
  }
}