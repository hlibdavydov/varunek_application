package com.example.gradle_test.Controllers;

import com.example.gradle_test.Models.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/student")
public class StudentController {
  private final StudentService studentService;
  @Autowired
  public StudentController(StudentService studentService) {
    this.studentService = studentService;
  }

  @GetMapping
  public EntityModel<List<Student>> getStudents() {
    return null;
  }

  @PostMapping
  public void registerNewStudent(@RequestBody Student student) {
    studentService.addStudent(student);
  }
}
