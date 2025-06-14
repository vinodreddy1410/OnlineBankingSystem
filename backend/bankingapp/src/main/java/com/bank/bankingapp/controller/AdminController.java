package com.bank.bankingapp.controller;

import com.bank.bankingapp.model.User;
import com.bank.bankingapp.model.Transaction;
import com.bank.bankingapp.repository.UserRepository;
import com.bank.bankingapp.repository.TransactionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    // Admin login using hardcoded credentials
    @PostMapping("/login")
    public String login(@RequestBody AdminLoginRequest request) {
        String username = request.getUsername();
        String password = request.getPassword();

        if ("admin".equals(username) && "admin123".equals(password)) {
            return "Admin login successful";
        } else {
            return "Invalid admin credentials";
        }
    }

    // Get all users with id, username, and balance
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get the last 5 transactions (ordered by timestamp descending)
    @GetMapping("/transactions/recent")
    public List<Transaction> getRecentTransactions() {
        return transactionRepository.findTop5ByOrderByTimestampDesc();
    }

    // Inner static class for admin login request
    public static class AdminLoginRequest {
        private String username;
        private String password;

        // Getters and Setters
        public String getUsername() {
            return username;
        }
        public void setUsername(String username) {
            this.username = username;
        }
        public String getPassword() {
            return password;
        }
        public void setPassword(String password) {
            this.password = password;
        }
    }
}