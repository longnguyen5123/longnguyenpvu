# Hồ sơ học tập Nguyễn Bá Long

- Trang công khai: https://longnguyen5123.github.io/longnguyenpvu/
- Trang quản trị: https://longnguyen5123.github.io/longnguyenpvu/admin/

## Cấu trúc hệ thống
- **Giao diện công khai:** GitHub Pages, xuất bản từ nhánh `main`, thư mục gốc của kho mã này.
- **Dữ liệu và đăng nhập:** Supabase.
  - Hàm `portfolio-api` trả nội dung công khai, lưu bài tập, nhận tệp đính kèm và nhận xét.
  - Bảng `portfolio_content` chứa bài tập/quiz/dự án.
  - Bảng `assignment_feedback` chứa nhận xét.
  - Bảng `portfolio_admins` chứa tài khoản quản trị.
  - Kho `portfolio-attachments` chứa tệp đính kèm (tối đa 25 MB mỗi tệp).
- Trang ChatGPT Sites cũ (`long-geology-portfolio.kagi5197.chatgpt.site`) không còn dùng để quản trị. Nó chỉ còn là nguồn để chuyển các tệp đính kèm cũ sang Supabase.

## Cập nhật bài tập, quiz và dự án
1. Mở trang quản trị và bấm **Đăng nhập bằng GitHub**. Chỉ tài khoản GitHub của chủ website mới có quyền lưu.
2. Bấm **+ Thêm mục** hoặc sửa mục có sẵn. Chọn loại bài tập hay quiz, nhập nội dung, đính kèm tệp nếu cần.
3. Bấm **Lưu lên website**, rồi tải lại trang công khai để xem nội dung mới.

Các nút khác trên trang quản trị:
- **Đánh giá và nhận xét:** xem nhận xét người xem gửi riêng cho chủ website.
- **Tải bản sao dữ liệu:** tải bản sao lưu nội dung về máy.
- **Thử dịch lại:** dịch lại các mục còn thiếu bản tiếng Anh. Khi lưu, các mục chưa dịch được sẽ được đánh dấu "Chờ dịch".
- **Chuyển tệp cũ sang Supabase:** chép các tệp đính kèm cũ từ ChatGPT Sites sang Supabase.

Bài tập và dự án được tải trực tiếp từ Supabase, nên không sửa chúng trong HTML.

## Sửa giao diện, giới thiệu và liên hệ
- `index.html` chứa nội dung trang (giới thiệu, hồ sơ, phương pháp, liên hệ).
- `portfolio.css` chứa màu sắc và bố cục.
- `language.js` chứa phần chuyển đổi VI/EN và bản dịch giao diện.
- `content.js` tải bài tập/dự án; `assignment-search.js` xử lý thanh tìm kiếm; `feedback.js` xử lý hộp nhận xét.
- Ảnh và hình nền: `portrait.png`, `petroleum-hero.webp`, các tệp `.svg`.
- `admin/` chứa trang quản trị.

Để sửa trực tiếp trên GitHub: đăng nhập bằng tài khoản sở hữu kho mã, mở tệp cần sửa, bấm biểu tượng bút chì, rồi lưu bằng **Commit changes**. GitHub Pages sẽ tự cập nhật sau khoảng 1–2 phút.

## Bật GitHub Pages
Vào Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.

## Bảo mật
Không sao chép mật khẩu, khóa bí mật (service role key, OpenAI key…) vào kho mã này. Khóa bí mật chỉ được lưu trong phần Secrets của Supabase.
