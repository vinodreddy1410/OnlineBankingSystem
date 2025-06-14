package com.bank.bankingapp.controller;

import com.bank.bankingapp.model.User;
import com.bank.bankingapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000") // Adjust this to your frontend URL
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginRequest loginRequest) {
        User user = userService.loginUser(loginRequest.getUsername(), loginRequest.getPassword());

        Map<String, Object> response = new HashMap<>();
        response.put("id", user.getId());
        response.put("username", user.getUsername());
        response.put("balance", user.getBalance());

        return response;
    }

    @GetMapping("/{id}/balance")
    public Map<String, Object> getBalance(@PathVariable Long id) {
        User user = userService.getUserById(id);

        Map<String, Object> response = new HashMap<>();
        response.put("username", user.getUsername());
        response.put("balance", user.getBalance());

        return response;
    }
    @PostMapping("/{id}/add-money")
public ResponseEntity<?> addMoney(@PathVariable Long id, @RequestBody Map<String, Object> request) {
    double amount = Double.parseDouble(request.get("amount").toString());

    User updatedUser = userService.addMoneyToUser(id, amount);

    Map<String, Object> response = new HashMap<>();
    response.put("message", "Money added successfully!");
    response.put("newBalance", updatedUser.getBalance());

    return ResponseEntity.ok(response);
}
@PostMapping("/{senderId}/transfer")
public String transferMoney(
        @PathVariable Long senderId,
        @RequestParam Long receiverId,
        @RequestParam double amount) {
    return userService.transferMoney(senderId, receiverId, amount);
}

    // Inner static class for login payload
    public static class LoginRequest {
        private String username;
        private String password;

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
