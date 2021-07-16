package com.example.gradle_test.Controllers;

import com.example.gradle_test.Models.Student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfiguration {
  @Bean
  CommandLineRunner commandLineRunner(StudentRepository repository){
    return args -> {
      final Student student = new Student("H", "123");
      repository.save(student);
    };
  }
}
