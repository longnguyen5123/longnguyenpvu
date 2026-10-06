(() => {
 const dictionary = {
  "Đến nội dung chính": "Skip to main content",
  "Giới thiệu": "About",
  "Bài tập": "Coursework",
  "Nghiên cứu": "Research",
  "Phương pháp": "Methodology",
  "Liên hệ": "Contact",
  "Điều hướng chính": "Main navigation",
  "Ngôn ngữ": "Language",
  "Thông tin cá nhân": "Personal profile",
  "Ảnh đại diện của Nguyễn Bá Long": "Portrait of Nguyễn Bá Long",
  "Sinh viên · Địa chất & Dầu khí": "Student · Geology & Petroleum",
  "Khám phá bài tập ↗": "Explore coursework ↗",
  "Dự án nghiên cứu": "Research projects",
  "Trường": "University",
  "Trường Đại học Dầu khí Việt Nam": "PetroVietnam University",
  "Chức vụ": "Position",
  "Sinh viên": "Student",
  "Chuyên ngành": "Major",
  "Địa chất – Dầu khí": "Petroleum Geology",
  "Khóa học": "Study period",
  "Địa chỉ hiện tại": "Current location",
  "TP. Hồ Chí Minh, Việt Nam": "Ho Chi Minh City, Vietnam",
  "Định hướng học tập": "Academic goals",
  "Lĩnh vực quan tâm": "Areas of interest",
  "Địa vật lý giếng khoan": "Well logging",
  "Địa chấn": "Seismics",
  "Địa chất dầu khí": "Petroleum geology",
  "Kĩ năng phần mềm": "Software skills",
  "HỒ SƠ HỌC TẬP / ACADEMIC PORTFOLIO": "ACADEMIC PORTFOLIO",
  "BÀI TẬP & LỜI GIẢI / ASSIGNMENTS & SOLUTIONS": "ASSIGNMENTS & SOLUTIONS",
  "DỰ ÁN NGHIÊN CỨU / RESEARCH PROJECTS": "RESEARCH PROJECTS",
  "PHƯƠNG PHÁP XÂY DỰNG / WEBSITE METHODOLOGY": "WEBSITE METHODOLOGY",
  "LIÊN HỆ & KẾT NỐI / CONTACT & CONNECTIONS": "CONTACT & CONNECTIONS",
  "Bài tập & lời giải": "Assignments & solutions",
  "Đề bài, cách làm, kết quả và phần đóng góp trong từng bài tập.": "Problems, methods, results and my contribution to each assignment.",
  "Tìm kiếm tên bài tập": "Search by title",
  "Nhập tên bài tập…": "Enter an assignment or quiz title…",
  "Tìm kiếm": "Search",
  "Xóa tìm kiếm": "Clear search",
  "Gợi ý bài tập": "Suggested coursework",
  "Loại bài tập": "Coursework category",
  "Đang tải bài tập…": "Loading coursework…",
  "Đang tải dự án…": "Loading projects…",
  "Hiện chưa có dự án nghiên cứu nào.": "There are currently no research projects.",
  "Hiện chưa có bài tập nào.": "There are currently no assignments.",
  "Từ ý tưởng đến website": "From idea to website",
  "01 / MỤC TIÊU & TÀI LIỆU": "01 / GOALS & RESOURCES",
  "Xác định yêu cầu": "Defining the requirements",
  "02 / CÔNG CỤ": "02 / TOOLS",
  "AI hỗ trợ, chủ hồ sơ quyết định": "AI assists; the portfolio owner decides",
  "03 / TRIỂN KHAI THỰC TẾ": "03 / DEPLOYMENT",
  "Vì sao chọn cách này?": "Why this approach?",
  "Đối chiếu công cụ cho website hồ sơ học tập": "Comparing tools for an academic portfolio",
  "Lựa chọn": "Option",
  "Điểm phù hợp": "Strengths",
  "Quyết định cho website": "Decision for this website",
  "Sơ đồ bố cục một trang": "Single-page layout",
  "Sơ đồ bố cục website từ trên xuống": "Website layout from top to bottom",
  "Thanh điều hướng: Giới thiệu · Nghiên cứu · Bài tập · Phương pháp · Liên hệ": "Navigation: About · Research · Coursework · Methodology · Contact",
  "Họ tên · định hướng học tập": "Name · academic goals",
  "Thẻ hồ sơ": "Profile card",
  "Ảnh bên trái · thông tin bên phải": "Photo on the left · information on the right",
  "Tóm tắt → Đề bài/dữ kiện → Cách làm/công thức → Kết quả → Vai trò → AI hỗ trợ → Tài liệu": "Summary → Problem/data → Method/formulas → Results → My role → AI support → Documents",
  "Hiện chưa có dự án; cập nhật khi có đề tài thực tế": "No projects yet; to be updated when a research topic is available",
  "Phương pháp xây dựng": "Website methodology",
  "Công cụ · yêu cầu gửi AI · điều chỉnh · khó khăn": "Tools · prompts · revisions · challenges",
  "Liên hệ & chân trang": "Contact & footer",
  "Email · LinkedIn · trường đại học": "Email · LinkedIn · university",
  "Wireframe mô tả thứ tự các phần trên trang công khai.": "The wireframe shows the order of sections on the public website.",
  "Hai ví dụ yêu cầu đã gửi cho AI": "Two examples of prompts sent to AI",
  "Các trích đoạn dưới đây lấy từ yêu cầu thực tế trong quá trình chỉnh sửa website.": "The excerpts below come from actual requests made while revising the website.",
  "PROMPT 01 / BỐ CỤC": "PROMPT 01 / LAYOUT",
  "PROMPT 02 / CHUYỂN NỀN TẢNG": "PROMPT 02 / PLATFORM MIGRATION",
  "Điều chỉnh:": "Revision:",
  "04 / BIÊN TẬP KẾT QUẢ AI": "04 / EDITING AI OUTPUT",
  "Những gì được chỉnh lại": "What was revised",
  "05 / KHÓ KHĂN & XỬ LÝ": "05 / CHALLENGES & SOLUTIONS",
  "Giữ nội dung và quyền chỉnh sửa": "Preserving content and editing access",
  "06 / KIỂM TRA & CẬP NHẬT": "06 / REVIEW & UPDATES",
  "Kiểm tra trước khi chia sẻ": "Checking before sharing",
  "Tài liệu nền tảng:": "Reference documentation:",
  ". Các hướng dẫn Google Sites, Wix và WordPress được liên kết trong bảng so sánh.": ". Google Sites, Wix and WordPress guides are linked in the comparison table.",
  "Kết nối & trao đổi học tập": "Connect & discuss learning",
  "© 2026 Nguyễn Bá Long · Trường Đại học Dầu khí Việt Nam": "© 2026 Nguyễn Bá Long · PetroVietnam University",
  "Vui lòng bật JavaScript để xem bài tập và dự án mới nhất.": "Please enable JavaScript to view the latest coursework and projects.",
  "Hoàn thành": "Completed",
  "Hoàn thành - Đã nộp": "Completed - Submitted",
  "Đang thực hiện": "In progress",
  "Tóm tắt bài tập": "Summary",
  "Đề bài / dữ kiện": "Problem / data",
  "Chi tiết cách làm": "View method details",
  "Rút gọn nội dung": "Collapse details",
  "Cách làm / công thức": "Method / formulas",
  "Kết quả chính": "Key results",
  "Vai trò của tôi": "My role",
  "AI đã hỗ trợ": "AI support",
  "Chưa bổ sung thông tin.": "No information added yet.",
  "Xem bài làm ↗": "View work ↗",
  "Xem tài liệu ↗": "View document ↗",
  "Xem phương pháp xây dựng ↗": "View website methodology ↗",
  "Đánh giá và nhận xét": "Review & feedback",
  "Chưa tải được nội dung mới nhất. Vui lòng thử lại.": "Could not load the latest content. Please try again.",
  "Thử lại": "Retry",
  "Không có tên bài tập phù hợp.": "No matching titles.",
  "Không tìm thấy bài tập có tên phù hợp.": "No matching coursework found.",
  "Đóng hộp nhận xét": "Close feedback form",
  "Gửi nhận xét": "Send feedback",
  "Họ tên": "Full name",
  "Tên người nhận xét": "Your name",
  "Vai trò": "Role",
  "Giảng viên": "Lecturer",
  "Khác": "Other",
  "Nhận xét": "Comment",
  "Nhận xét về bài làm…": "Your feedback on this work…",
  "Nhận xét được gửi riêng cho chủ website, không hiển thị công khai. Không cần đăng nhập.": "Feedback is sent privately to the website owner and is not displayed publicly. No sign-in is required.",
  "Đang gửi…": "Sending…",
  "Đã gửi nhận xét": "Feedback sent",
  "Đã gửi nhận xét. Cảm ơn bạn đã góp ý!": "Your feedback has been sent. Thank you!",
  "Thử gửi lại": "Try again",
  "Kết nối chậm. Nội dung vẫn còn; bạn có thể thử gửi lại.": "The connection is slow. Your comment is preserved; you can try again.",
  "Chưa gửi được nhận xét.": "Could not send feedback.",
  "Địa vật lý ứng dụng": "Applied Geophysics",
  "Mình mong muốn trở thành kỹ sư địa chất dầu khí, làm việc trong lĩnh vực thăm dò và minh giải tài liệu địa chấn/địa vật lý giếng khoan. Hiện tại mình đang tìm kiếm những cơ hội thực tập trong ngành dầu khí, đồng thời có những sự quan tâm nhất định về ngành năng lượng tái tạo nói chung và điện gió ngoài khơi nói riêng.": "I aspire to become a petroleum geologist working in exploration and the interpretation of seismic and well-log data. I am currently seeking internship opportunities in the oil and gas industry, while also developing an interest in renewable energy, particularly offshore wind power.",
  "Tìm hiểu mối liên hệ giữa dữ liệu địa chất, địa vật lý và đặc điểm vỉa chứa; củng cố vững chắc nền tảng địa chất, địa vật lý; nâng cao kỹ năng sử dụng phần mềm cho công việc minh giải; phát triển kỹ năng phân tích và trình bày kết quả.": "Explore the relationships between geological and geophysical data and reservoir characteristics; build a strong foundation in geology and geophysics; improve software skills for interpretation; and develop analytical and presentation skills.",
  "Trao đổi về học tập và tìm kiếm những cơ hội thực tập trong lĩnh vực địa chất – dầu khí cũng như tiếp cận sâu hơn về ngành năng lượng tái tạo.": "Discuss learning, explore internship opportunities in geology and petroleum, and gain a deeper understanding of the renewable energy sector.",
  "Quá trình thực hiện Assignment 03: xây dựng hồ sơ học tập bằng AI, lựa chọn cách triển khai và điều chỉnh sản phẩm qua nhiều lần góp ý.": "Assignment 03 documents the process of building an academic portfolio with AI, selecting a deployment approach and refining the website through successive rounds of feedback.",
  "Website giới thiệu bản thân, lưu bài tập và dành chỗ cho nghiên cứu khi có đề tài. Các tài liệu hướng dẫn được đối chiếu trong quá trình xây dựng gồm MDN về HTML/CSS/JavaScript và tài liệu GitHub Pages về xuất bản trang tĩnh. Nội dung cá nhân và bài làm được cung cấp riêng, không lấy từ website mẫu.": "The website introduces me, hosts coursework and reserves space for future research. References consulted during development include MDN documentation on HTML, CSS and JavaScript, and GitHub Pages documentation on publishing static sites. Personal information and coursework were supplied separately, rather than taken from the reference website.",
  "AI được sử dụng nhằm hỗ trợ viết và sửa mã theo yêu cầu bằng ngôn ngữ tự nhiên. HTML, CSS và JavaScript cho phép điều chỉnh trực tiếp từng mục, kiểu thẻ hồ sơ và cách trình bày bài tập. Lựa chọn này phù hợp với mục tiêu vừa có sản phẩm cá nhân vừa trình bày được quá trình sử dụng AI.": "AI assists with writing and revising code based on natural-language requests. HTML, CSS and JavaScript provide direct control over sections, the profile card and coursework presentation. This approach supports both creating a personal website and documenting the use of AI.",
  "Bản đầu được xây dựng trên Sites trong ChatGPT. Hiện giao diện công khai được xuất bản trên GitHub Pages. Trang quản trị, đăng nhập và dữ liệu bài tập/dự án vẫn ở Sites; giao diện GitHub tải nội dung công khai từ đó. Sites ở đây không phải Google Sites.": "The initial version was built with Sites in ChatGPT. The public interface is now published on GitHub Pages. Administration, authentication and coursework/project data remain on Sites, from which the GitHub interface loads public content. Here, Sites refers to ChatGPT Sites, not Google Sites.",
  "So sánh dưới đây là đánh giá theo nhu cầu của hồ sơ này; không phải kết quả thử nghiệm toàn bộ các nền tảng.": "The comparison below reflects this portfolio’s requirements; it is not the result of testing every platform.",
  "Tạo và xuất bản trang bằng trình biên tập có sẵn.": "Create and publish pages using a built-in editor.",
  "Có thể dùng cho hồ sơ đơn giản. Với bài này, ưu tiên chỉnh trực tiếp mã để kiểm soát bố cục và trình bày cách AI hỗ trợ xây dựng.": "Suitable for a simple portfolio. For this assignment, direct code editing was preferred to control the layout and demonstrate AI-assisted development.",
  "Trình biên tập trực quan để thiết kế website.": "A visual editor for designing websites.",
  "Không chọn vì muốn tiếp tục phát triển bản HTML/CSS đã có và lưu lịch sử sửa mã trong GitHub.": "Not selected because the aim was to develop the existing HTML/CSS version and keep a code history in GitHub.",
  "Hệ thống quản lý nội dung phù hợp với website có nhiều trang và bài viết.": "A content management system suited to websites with many pages and posts.",
  "Hồ sơ hiện chỉ cần một trang cùng các bài tập; chưa cần chuyển sang một hệ thống quản lý nội dung khác.": "The portfolio currently needs only a single page and coursework entries, so another content management system is unnecessary.",
  "Xuất bản HTML/CSS/JavaScript từ kho mã và lưu lại lịch sử thay đổi.": "Publish HTML, CSS and JavaScript from a repository with a history of changes.",
  "Được chọn cho trang công khai với địa chỉ github.io. Vì Pages phục vụ nội dung tĩnh, phần đăng nhập và lưu bài tập tiếp tục dùng dịch vụ phía máy chủ trên Sites.": "Selected for the public website at a github.io address. As Pages serves static content, authentication and saved coursework continue to use the server-side service on Sites.",
  "Menu trên cùng dẫn đến từng mục trong cùng một trang. Ảnh và thông tin nằm cạnh nhau trong thẻ hồ sơ; bài tập được chia thành các mục nội dung để dễ đọc.": "The top navigation links to sections on the same page. The profile card places the photo next to personal information, and coursework is divided into readable content sections.",
  "“Ngoài ra phần cột bên trái bao gồm những mục cụ thể, bạn làm cho nó ở trên cùng của trang thay vì bên trái trang được không”": "“Could you move the section menu from the left-hand column to the top of the page?”",
  "chuyển menu dọc sang thanh điều hướng trên cùng, giữ các liên kết đến từng mục.": "moved the vertical menu to a top navigation bar, retaining links to each section.",
  "“Ok, bây giờ chuyển đổi web này sang github mà vẫn giữ được khả năng chỉnh sửa khi tôi đăng nhập vào”": "“Now move this website to GitHub while keeping the ability to edit it when I sign in.”",
  "xuất bản giao diện trên GitHub Pages, giữ trang quản trị riêng trên Sites để tiếp tục lưu nội dung sau đăng nhập.": "published the interface on GitHub Pages and retained a separate Sites administration page for saving content after sign-in.",
  "Bỏ nội dung nghiên cứu mẫu khi chưa có dự án; thay thông tin liên hệ bằng email và LinkedIn; tách các dòng liên hệ; bỏ ngày cập nhật; điều chỉnh hồ sơ sinh viên thành dạng thẻ ID. Sau khi bản rút gọn làm mất chi tiết bài tập, đối chiếu HTML đã tải lên để khôi phục đề bài và cách làm. Đây là các quyết định chỉnh sửa từ chủ hồ sơ.": "Removed sample research content because no projects existed; changed contact information to email and LinkedIn; separated contact lines; removed the update date; and redesigned the student profile as an ID card. When a shortened version lost coursework details, the uploaded HTML was used to restore the problems and methods. These revisions were directed by the portfolio owner.",
  "Khó khăn thứ nhất là phần bài tập bị rút gọn quá mức: xử lý bằng cách khôi phục các trường từ bản HTML cũ. Khó khăn thứ hai là chuyển sang trang tĩnh nhưng vẫn cần đăng nhập để sửa: xử lý bằng cách giữ quản trị và dữ liệu trên Sites. Việc xuất bản GitHub còn cần chủ tài khoản hoàn tất xác minh đăng nhập.": "The first challenge was excessive shortening of coursework, resolved by restoring fields from the earlier HTML. The second was retaining authenticated editing on a static website, resolved by keeping administration and data on Sites. Publishing to GitHub also required the account owner to complete sign-in verification.",
  "Đối chiếu nội dung với bản gốc, kiểm tra điều hướng và khả năng tải danh sách bài tập; kiểm tra quyền chỉ chủ website được lưu thay đổi. Khi có bài mới, nhập nội dung trong trang quản trị và lưu. Liên kết tài liệu cần có quyền xem phù hợp; vai trò cá nhân và kết quả học thuật cần được chủ hồ sơ bổ sung đúng với bài làm thực tế.": "Compare content with the original, check navigation and coursework loading, and verify that only the owner can save changes. New work is entered and saved in the administration page. Document links need appropriate viewing permissions, and the owner must accurately describe personal contributions and academic results.",
  "Sử dụng AI để làm bài thuyết trình tổng quan về môn Địa vật lý ứng dụng": "Use AI to create an overview presentation for Applied Geophysics.",
  "Sử dụng AI để làm bài thuyết trình về môn Địa vật lý ứng dụng": "Use AI to create a presentation on Applied Geophysics.",
  "Sử dụng AI kèm file dữ kiện về môn học để tạo bản thuyết trình Powerpoint": "Use AI together with the course information file to create a PowerPoint presentation.",
  "Bài thuyết trình PowerPoint về môn Địa vật lý ứng dụng.": "A PowerPoint presentation on Applied Geophysics.",
  "Soạn dàn ý tóm tắt và đưa ra nội dung thuyết trình": "Prepare a summary outline and develop the presentation content.",
  "AI hỗ trợ tạo bản thuyết trình PowerPoint từ file dữ kiện về môn học.": "AI helped create the PowerPoint presentation from the course information file.",
  "Khu vực dành cho bài tập địa chấn: lý thuyết cho các dữ kiện, nguyên lý, các bước tính và biểu đồ kết quả. Giải các bài tập cuối chương, kiểm tra công thức và kết quả tính toán, viết phần bài tập và tài liệu tham khảo. Giới thiệu tổng quan về các thiết bị liên quan đến Địa vật lý ứng dụng": "Seismic coursework covering theory, data, principles, calculation steps and result plots. Solve end-of-chapter exercises, verify formulas and calculations, and write the exercise and reference sections. Introduce equipment used in Applied Geophysics.",
  "Sử dụng kết hợp AI để tạo slide thuyết trình. Bổ sung giả thiết, công thức, đơn vị và trình tự tính toán của bài giải đã kiểm tra. Chụp ảnh các thiết bị và cách sử dụng chúng trên trường để viết nội dung và giới thiệu về các thiết bị": "Use AI to help create presentation slides. Add assumptions, formulas, units and verified calculation steps. Photograph university equipment and document its operation to prepare the equipment introduction.",
  "Bài thuyết trình PowerPoint về tổng quan địa chấn cùng với bài giải của các bài tập liên quan thuộc chương 2 và giới thiệu về một số thiết bị địa chấn tại phòng thí nghiệm của trường PVU": "A PowerPoint presentation on General Seismic, including solutions to relevant Chapter 2 exercises and an introduction to selected seismic equipment at the PVU laboratory.",
  "Giải các bài tập thuộc chương 2 và đưa chúng lên bài thuyết trình Powerpoint": "Solve the Chapter 2 exercises and include the solutions in the PowerPoint presentation.",
  "AI được sử dụng để hỗ trợ tạo slide thuyết trình và hỗ trợ trong quá trình đánh giá và kiểm tra kết quả tính": "AI helped create the presentation slides and assisted with reviewing and checking calculation results.",
  "Xây dựng website hồ sơ học tập với sự hỗ trợ của AI, đăng bài tập và cập nhật dự án nghiên cứu (nếu có)": "Build an academic portfolio with AI assistance, publish coursework and update research projects when available.",
  "Bản đầu dùng AI hỗ trợ thiết kế HTML, CSS và JavaScript, tách nội dung khỏi giao diện và xuất HTML. Bản hiện tại dùng GitHub Pages cho giao diện công khai; trang quản trị và dữ liệu bài tập, dự án tiếp tục chạy trên Sites.": "The first version used AI to help design HTML, CSS and JavaScript, separate content from presentation and export HTML. The current version uses GitHub Pages for the public interface, while administration and coursework/project data continue to run on Sites.",
  "Website hồ sơ học tập đã công khai trên GitHub Pages, có các bài tập liên quan được giao, liên kết tài liệu và trang quản trị riêng để cập nhật nội dung. Mục nghiên cứu hiện chưa có dự án.": "The academic portfolio is publicly available on GitHub Pages, with assigned coursework, document links and a separate administration page for updates. The research section currently has no projects.",
  "Cung cấp thông tin cá nhân, ảnh và liên kết bài làm; quyết định bố cục, yêu cầu sửa nội dung và kiểm tra bản trình bày. Các điều chỉnh gồm chuyển menu lên đầu trang, bỏ nội dung nghiên cứu mẫu vì hiện tại chưa có dự án nghiên cứu nào và chỉnh sửa khung hồ sơ thành thẻ ID dễ nhận diện.": "Provide personal information, a photo and coursework links; decide the layout, request content revisions and review the presentation. Changes include moving navigation to the top, removing sample research content because no projects currently exist, and redesigning the profile as a clearly recognizable ID card.",
  "AI được sử dụng nhằm hỗ trợ đề xuất giao diện, viết và chỉnh mã, tạo biểu mẫu quản trị, kết nối dữ liệu và hỗ trợ xuất bản. Nội dung cá nhân và yêu cầu chỉnh sửa do chủ hồ sơ cung cấp.": "AI assisted with proposing the interface, writing and revising code, creating administration forms, connecting data and publishing the website. The portfolio owner supplied personal content and revision requests.",
  "Giải thích về phương pháp thời gian trễ (delay time method) – phương pháp thường được sử dụng trong việc phân tích dữ liệu địa chấn khúc xạ đối với mặt ranh giới không lý tưởng giữa hai lớp đá.": "Explain the delay time method, commonly used to analyse seismic refraction data for a non-ideal interface between two rock layers.",
  "Dùng phương pháp thời gian trễ (delay time) cho mặt phân cách không lý tưởng giữa hai lớp. Tách thời gian truyền khúc xạ thành T_AG = x/V₂ + δ_A + δ_G, với δ = z·cosθc/V₁. Đo thuận – nghịch, tính δ_G = ½(T_AG + T_BG − T_AB) (thời gian cộng của Hagedoorn), rồi đổi sang độ sâu z_G = δ_G·V₁V₂/√(V₂² − V₁²) tại từng geophone để dựng mặt cắt mặt khúc xạ": "Apply the delay time method to a non-ideal interface between two layers. Express the refracted travel time as T_AG = x/V₂ + δ_A + δ_G, where δ = z·cosθc/V₁. Use forward and reverse measurements to calculate δ_G = ½(T_AG + T_BG − T_AB) (Hagedoorn’s plus time), then convert it to depth z_G = δ_G·V₁V₂/√(V₂² − V₁²) at each geophone to construct the refractor profile.",
  "Khôi phục được hình dạng nhấp nhô của mặt khúc xạ từ số liệu thuận – nghịch. Trong ví dụ số minh họa (dữ liệu tổng hợp, V₁ = 800 m/s, V₂ = 2500 m/s), độ sâu tính được lệch tối đa khoảng 0,4 m so với mô hình, các chi tiết nhỏ bị làm trơn nhẹ. Phương pháp chỉ đúng khi mặt phân cách dốc thoải, lớp trên đồng nhất và không có lớp ẩn.": "Reconstructed the undulating refractor surface from forward and reverse data. In the illustrative numerical example (synthetic data, V₁ = 800 m/s, V₂ = 2500 m/s), calculated depths differ from the model by at most about 0.4 m, with slight smoothing of small features. The method is valid only for a gently dipping interface, a homogeneous upper layer and no hidden layer.",
  "Tìm hiểu lý thuyết và công thức, kiểm tra lại công thức, đưa ra ví dụ và cách tính, chỉnh sửa bài và trình bày bài tập": "Study the theory and formulas, verify the formulas, develop an example and calculations, revise the work and present the exercise.",
  "Sử dụng google và AI để giải thích phương pháp, vẽ các sơ đồ/đồ thị và tạo ví dụ số tổng hợp": "Use Google and AI to explain the method, draw diagrams and plots, and create a synthetic numerical example."
};
 const clean = s => s.trim().replace(/\s+/g,' ');
 const map = new Map(Object.entries(dictionary).map(([a,b]) => [clean(a),b]));
 let lang = 'vi'; try {lang = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'vi';} catch {}
 const originals = new WeakMap(), attributes = new WeakMap();
 const selectors = {title:'h3',course:'.course',status:'.status',summary:'.assignment-copy > p',objective:'.assignment-objective p',method:'.assignment-detail-grid .assignment-detail:nth-child(1) p',results:'.assignment-detail-grid .assignment-detail:nth-child(2) p',role:'.assignment-detail-grid .assignment-detail:nth-child(3) p',aiSupport:'.assignment-detail-grid .assignment-detail:nth-child(4) p',linkLabel:'.assignment-actions a'};
 function translated(text) {return lang === 'en' ? (map.get(clean(text)) || text) : text;}
 let observer;
 function render() {
  observer?.disconnect();
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));
  const walker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()) {
   const node = walker.currentNode;
   if (node.parentElement?.closest('script,style,textarea,input,[data-no-translate],#assignment-suggestions,#assignment-search-status,.category-count')) continue;
   const previous = originals.get(node);
   const source = !previous || (node.nodeValue !== previous.rendered && node.nodeValue !== previous.source) ? node.nodeValue : previous.source;
   const output = translated(source);
   // Preserve spaces around text nodes adjacent to inline elements.
   const result = output===source ? source : (source.match(/^\s*/)[0]+output+source.match(/\s*$/)[0]);
   if (node.nodeValue!==result) node.nodeValue=result;
   originals.set(node,{source,rendered:result});
  }
  document.querySelectorAll('[placeholder],[aria-label],[alt]').forEach(el => {
   let saved=attributes.get(el); if(!saved){saved={};attributes.set(el,saved);}
   for(const key of ['placeholder','aria-label','alt']) if(el.hasAttribute(key)) {
    if(!(key in saved)) saved[key]=el.getAttribute(key);
    el.setAttribute(key,translated(saved[key]));
   }
  });
  document.querySelectorAll('article[data-en]').forEach(card => {
   let data;try{data=JSON.parse(card.dataset.en)}catch{return}
   for(const [key,selector] of Object.entries(selectors)) {
    const el=card.querySelector(selector); if(!el)continue;
    if(!el.dataset.originalText) el.dataset.originalText = Array.from(el.childNodes).map(n=>originals.get(n)?.source||n.textContent).join('');
    const en=data[key];
    if(lang==='en' && en?.trim()) el.textContent=en+(key==='linkLabel'?' ↗':'');
    else if (el.dataset.overrideApplied==='true') el.textContent=translated(el.dataset.originalText);
    el.dataset.overrideApplied=String(lang==='en'&&!!en?.trim());
   }
  });
  observer?.observe(document.body,{childList:true,subtree:true,characterData:true});
 }
 window.portfolioI18n={get lang(){return lang;},text:translated,refresh:render};
 observer=new MutationObserver(records=>{if(records.some(r=>!r.target.parentElement?.closest('#assignment-search-status,#assignment-suggestions,.category-count')))render();});
 document.addEventListener('click',event=>{
  const button=event.target.closest('[data-lang]');if(!button)return;
  lang=button.dataset.lang==='en'?'en':'vi';try{localStorage.setItem('portfolio-language',lang);}catch{}
  render();document.dispatchEvent(new CustomEvent('portfolio:language'));
 });
 document.addEventListener('portfolio:content',render);
 render();
})();
