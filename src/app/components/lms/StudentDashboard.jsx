"use client";
import React, { useEffect } from "react";

const StudentDashboard = () => {
  useEffect(() => {
    // all your JS should be inside useEffect to ensure it runs after the DOM loads

    const coursesData = [
      {
        id: 1,
        code: "MATH101",
        title: "Calculus I",
        instructor: "Dr. James Wilson",
        department: "Mathematics",
        credits: 4,
        description:
          "Introduction to differential and integral calculus of functions of one variable. Topics include limits, continuity, derivatives, applications of derivatives, integrals, and the fundamental theorem of calculus.",
        progress: 75,
        schedule: "Mon, Wed, Fri 10:00-11:00 AM",
        location: "Room 204",
        status: "active",
        syllabusUrl: "#",
      },
      {
        id: 2,
        code: "PHYS201",
        title: "Physics for Engineers",
        instructor: "Dr. Maria Rodriguez",
        department: "Science",
        credits: 4,
        description:
          "Classical mechanics, thermodynamics, and waves. Emphasis on problem-solving and applications to engineering systems.",
        progress: 60,
        schedule: "Tue, Thu 1:00-2:30 PM",
        location: "Science Building 105",
        status: "active",
        syllabusUrl: "#",
      },
      {
        id: 3,
        code: "CS101",
        title: "Introduction to Programming",
        instructor: "Prof. Alan Turing",
        department: "Computer Science",
        credits: 3,
        description:
          "Fundamental concepts of programming using Python. Topics include variables, control structures, functions, arrays, and basic algorithms.",
        progress: 90,
        schedule: "Mon, Wed 3:00-4:30 PM",
        location: "Computer Lab 2",
        status: "active",
        syllabusUrl: "#",
      },
      {
        id: 4,
        code: "ENG101",
        title: "Composition and Rhetoric",
        instructor: "Dr. Elizabeth Bennett",
        department: "Humanities",
        credits: 3,
        description:
          "Development of writing skills through analysis and composition of various texts. Emphasis on argumentation, research, and critical thinking.",
        progress: 100,
        schedule: "Tue, Thu 11:00 AM-12:30 PM",
        location: "Humanities Building 302",
        status: "completed",
        syllabusUrl: "#",
      },
      {
        id: 5,
        code: "CHEM101",
        title: "General Chemistry",
        instructor: "Dr. Robert Chang",
        department: "Science",
        credits: 4,
        description:
          "Fundamental principles of chemistry including atomic structure, chemical bonding, stoichiometry, states of matter, and chemical reactions.",
        progress: 45,
        schedule: "Mon, Wed, Fri 9:00-10:00 AM",
        location: "Chemistry Building 101",
        status: "active",
        syllabusUrl: "#",
      },
      {
        id: 6,
        code: "HIST202",
        title: "World History Since 1500",
        instructor: "Dr. Samuel Johnson",
        department: "Humanities",
        credits: 3,
        description:
          "Survey of world history from the age of exploration to the present. Focus on global interactions, political developments, and cultural exchanges.",
        progress: 30,
        schedule: "Tue, Thu 2:00-3:30 PM",
        location: "History Building 205",
        status: "active",
        syllabusUrl: "#",
      },
      {
        id: 7,
        code: "MATH202",
        title: "Linear Algebra",
        instructor: "Dr. James Wilson",
        department: "Mathematics",
        credits: 3,
        description:
          "Systems of linear equations, matrices, determinants, vector spaces, eigenvalues, and eigenvectors with applications.",
        progress: 0,
        schedule: "Mon, Wed 1:00-2:30 PM",
        location: "Math Building 310",
        status: "upcoming",
        syllabusUrl: "#",
      },
      {
        id: 8,
        code: "CS201",
        title: "Data Structures and Algorithms",
        instructor: "Prof. Grace Hopper",
        department: "Computer Science",
        credits: 4,
        description:
          "Study of fundamental data structures and algorithms. Topics include arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching algorithms.",
        progress: 20,
        schedule: "Mon, Wed, Fri 11:00 AM-12:00 PM",
        location: "Computer Lab 3",
        status: "active",
        syllabusUrl: "#",
      },
    ];

    // --------- BELOW THIS LINE: your DOM logic as-is ---------
    // (Just wrapped safely in useEffect)
    let currentPage = 1;
    const coursesPerPage = 6;
    let selectedCourseId = null;
    let filteredCourses = [...coursesData];

    const getProgressColor = (progress) => {
      if (progress >= 90) return "bg-success";
      if (progress >= 70) return "bg-primary";
      if (progress >= 50) return "bg-info";
      if (progress >= 30) return "bg-warning";
      return "bg-danger";
    };

    const getStatusBadge = (status) => {
      switch (status) {
        case "active":
          return { class: "bg-primary", text: "Active" };
        case "completed":
          return { class: "bg-success", text: "Completed" };
        case "upcoming":
          return { class: "bg-info", text: "Upcoming" };
        default:
          return { class: "bg-secondary", text: "Unknown" };
      }
    };

    const coursesGrid = document.getElementById("coursesGrid");
    const pagination = document.getElementById("pagination");
    const courseDetails = document.getElementById("courseDetails");
    const noCourseSelected = document.getElementById("noCourseSelected");
    const courseSearch = document.getElementById("courseSearch");
    const departmentFilter = document.getElementById("departmentFilter");
    const sortBy = document.getElementById("sortBy");
    const statusFilter = document.getElementById("statusFilter");

    // --- Render and filter logic (same as before) ---
    function renderCourses() {
      const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
      const startIndex = (currentPage - 1) * coursesPerPage;
      const endIndex = startIndex + coursesPerPage;
      const coursesToShow = filteredCourses.slice(startIndex, endIndex);

      coursesGrid.innerHTML = "";

      coursesToShow.forEach((course) => {
        const progressColor = getProgressColor(course.progress);
        const statusBadge = getStatusBadge(course.status);

        const card = document.createElement("div");
        card.className = `col-md-6 col-lg-4 mb-4`;
        card.innerHTML = `
          <div class="card course-card ${
            selectedCourseId === course.id ? "selected" : ""
          }" data-course-id="${course.id}">
            <div class="card-body">
              <span class="badge ${statusBadge.class}">${
          statusBadge.text
        }</span>
              <h5 class="card-title">${course.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${course.code}</h6>
              <p class="card-text">${course.instructor}</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">${course.department}</small>
                <small class="text-muted">${course.credits} credits</small>
              </div>
              <div class="mt-3">
                <div class="d-flex justify-content-between mb-1">
                  <small>Progress</small>
                  <small>${course.progress}%</small>
                </div>
                <div class="progress course-progress">
                  <div class="progress-bar ${progressColor}" style="width: ${course.progress}%"></div>
                </div>
              </div>
            </div>
          </div>
        `;
        card
          .querySelector(".course-card")
          .addEventListener("click", () => selectCourse(course.id));
        coursesGrid.appendChild(card);
      });

      renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
      pagination.innerHTML = "";
      if (totalPages <= 1) return;

      for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li");
        li.className = `page-item ${currentPage === i ? "active" : ""}`;
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.addEventListener("click", (e) => {
          e.preventDefault();
          currentPage = i;
          renderCourses();
        });
        pagination.appendChild(li);
      }
    }

    function selectCourse(courseId) {
      selectedCourseId = courseId;
      const course = coursesData.find((c) => c.id === courseId);
      if (course) {
        noCourseSelected.style.display = "none";
        courseDetails.style.display = "block";
        document.getElementById("courseTitle").textContent = course.title;
        document.getElementById("courseDescription").textContent =
          course.description;
      }
    }

    function applyFilters() {
      const searchTerm = courseSearch.value.toLowerCase();
      const department = departmentFilter.value;
      const status = statusFilter.value;
      const sortField = sortBy.value;

      filteredCourses = coursesData.filter((course) => {
        const matchesSearch =
          course.title.toLowerCase().includes(searchTerm) ||
          course.code.toLowerCase().includes(searchTerm) ||
          course.instructor.toLowerCase().includes(searchTerm);

        const matchesDepartment =
          department === "all" ||
          course.department.toLowerCase().includes(department);

        const matchesStatus = status === "all" || course.status === status;

        return matchesSearch && matchesDepartment && matchesStatus;
      });

      if (sortField === "name")
        filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
      if (sortField === "progress")
        filteredCourses.sort((a, b) => b.progress - a.progress);

      currentPage = 1;
      renderCourses();
    }

    courseSearch?.addEventListener("input", applyFilters);
    departmentFilter?.addEventListener("change", applyFilters);
    statusFilter?.addEventListener("change", applyFilters);
    sortBy?.addEventListener("change", applyFilters);

    renderCourses();
  }, []);
  return (
    <div>
      <div className="overlay" id="overlay"></div>
      <div id="mobile-sidebar">
        <div className="sidebar-header p-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h3>Student Portal</h3>
              <p>Course Management</p>
            </div>
            <button className="btn btn-sm btn-light" id="close-mobile-sidebar">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#" className="active">
              <i className="bi bi-house-door"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-journal-text"></i> My Courses
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-calendar-check"></i> Schedule
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-clipboard-data"></i> Grades
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-chat-left-text"></i> Messages
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-person-circle"></i> Profile
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-box-arrow-right"></i> Logout
            </a>
          </li>
        </ul>
      </div>
      <div id="sidebar">
        <div className="sidebar-header">
          <h3>Student Portal</h3>
          <p>Course Management</p>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#" className="active">
              <i className="bi bi-house-door"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-journal-text"></i> My Courses
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-calendar-check"></i> Schedule
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-clipboard-data"></i> Grades
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-chat-left-text"></i> Messages
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-person-circle"></i> Profile
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-box-arrow-right"></i> Logout
            </a>
          </li>
        </ul>
      </div>
      <div id="content">
        <div
          id="topbar"
          className="d-flex justify-content-between align-items-center"
        >
          <div className="d-flex align-items-center">
            <button className="btn btn-sm me-3 d-lg-none" id="sidebar-toggle">
              <i className="bi bi-list" style={{ fontSize: "1.5rem;" }}></i>
            </button>
            <div className="search-box">
              <i className="bi bi-search"></i>
              <input
                type="text"
                className="form-control"
                id="courseSearch"
                placeholder="Search courses..."
              />
            </div>
          </div>
          <div className="user-menu d-flex align-items-center">
            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center text-decoration-none dropdown-toggle"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://ui-avatars.com/api/?name=Sarah+Williams&background=4361ee&color=fff"
                  alt="User"
                />
                <span className="d-none d-md-inline">Sarah Williams</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="userDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-person me-2"></i> Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-gear me-2"></i> Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid p-4">
          <div className="row mb-4">
            <div className="col">
              <h1 className="h3 mb-0">My Courses</h1>
              <p className="text-muted">
                Manage your courses and academic progress
              </p>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary" id="exportCSV">
                <i className="bi bi-download me-2"></i> Export to CSV
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="filters-section">
                <div className="row g-3">
                  <div className="col-md-4">
                    <label htmlFor="departmentFilter" className="form-label">
                      Department
                    </label>
                    <select className="form-select" id="departmentFilter">
                      <option value="all">All Departments</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="science">Science</option>
                      <option value="computer">Computer Science</option>
                      <option value="engineering">Engineering</option>
                      <option value="humanities">Humanities</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="sortBy" className="form-label">
                      Sort By
                    </label>
                    <select className="form-select" id="sortBy">
                      <option value="name">Course Name</option>
                      <option value="progress">Progress</option>
                      <option value="department">Department</option>
                      <option value="credits">Credits</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="statusFilter" className="form-label">
                      Status
                    </label>
                    <select className="form-select" id="statusFilter">
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="completed">Completed</option>
                      <option value="upcoming">Upcoming</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row" id="coursesGrid"></div>
              <div className="pagination-container">
                <nav aria-label="Course pagination">
                  <ul className="pagination" id="pagination"></ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div id="courseDetailsPanel">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Course Details</h4>
                  <span className="badge bg-primary" id="courseCodeBadge">
                    -
                  </span>
                </div>
                <p className="text-muted mb-4" id="noCourseSelected">
                  Select a course to view details
                </p>
                <div id="courseDetails" style={{ display: "none;" }}>
                  <div className="course-detail-item">
                    <h5 id="courseTitle">Course Title</h5>
                    <p className="text-muted mb-2" id="courseInstructor">
                      Instructor: -
                    </p>
                    <div className="d-flex">
                      <span
                        className="badge bg-light text-dark me-2"
                        id="courseDepartment"
                      >
                        -
                      </span>
                      <span
                        className="badge bg-light text-dark"
                        id="courseCredits"
                      >
                        - credits
                      </span>
                    </div>
                  </div>
                  <div className="course-detail-item">
                    <h6>Course Progress</h6>
                    <div className="progress course-progress mb-2">
                      <div
                        className="progress-bar"
                        id="courseProgressBar"
                        role="progressbar"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <small className="text-muted" id="courseProgressText">
                      0% Complete
                    </small>
                  </div>
                  <div className="course-detail-item">
                    <h6>Schedule</h6>
                    <p className="mb-1" id="courseSchedule">
                      -
                    </p>
                    <small className="text-muted" id="courseLocation">
                      Location: -
                    </small>
                  </div>
                  <div className="course-detail-item">
                    <h6>Description</h6>
                    <p id="courseDescription">No description available.</p>
                  </div>
                  <div className="course-detail-item">
                    <h6>Quick Actions</h6>
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-outline-primary"
                        id="viewSyllabus"
                      >
                        <i className="bi bi-file-text me-2"></i> View Syllabus
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        id="viewMaterials"
                      >
                        <i className="bi bi-folder me-2"></i> Course Materials
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        id="dropCourse"
                        data-bs-toggle="modal"
                        data-bs-target="#dropCourseModal"
                      >
                        <i className="bi bi-x-circle me-2"></i> Drop Course
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="dropCourseModal"
        tabindex="-1"
        aria-labelledby="dropCourseModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="dropCourseModalLabel">
                Drop Course
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Are you sure you want to drop{" "}
                <strong id="dropCourseName">this course</strong>?
              </p>
              <p className="text-danger">
                This action cannot be undone and may affect your academic
                progress.
              </p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="confirmDrop"
                />
                <label className="form-check-label" htmlFor="confirmDrop">
                  I understand the consequences of dropping this course
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                id="confirmDropBtn"
                disabled
              >
                Drop Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentDashboard;
