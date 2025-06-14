package com.bank.bankingapp.service;

import com.bank.bankingapp.model.User;
import com.bank.bankingapp.repository.TransactionRepository;
import com.bank.bankingapp.repository.UserRepository;
import com.bank.bankingapp.model.Transaction;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
private TransactionRepository transactionRepository;

    public User registerUser(User user) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null) {
            throw new RuntimeException("Username already taken");
        }
        return userRepository.save(user);
    }

    public User loginUser(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
//     public User getUserById(Long id) {
//     return userRepository.findById(id)
//             .orElseThrow(() -> new RuntimeException("User not found with id: "+id));
// }
public double getBalanceByUsername(String username) {
    User user = userRepository.findByUsername(username);

    if (user == null) {
        throw new RuntimeException("User not found");
    }

    return user.getBalance();
}
public User getUserById(Long id) {
    User user = userRepository.findById(id).orElse(null);

    if (user == null) {
        throw new RuntimeException("User not found with ID: " + id);
    }

    return user;
}
public User addMoneyToUser(Long id, double amount) {
        User user = getUserById(id);
        double newBalance = user.getBalance() + amount;
        user.setBalance(newBalance);
        return userRepository.save(user);
    }
public String transferMoney(Long senderId, Long receiverId, double amount) {
    User sender = userRepository.findById(senderId)
            .orElseThrow(() -> new RuntimeException("Sender not found"));

    User receiver = userRepository.findById(receiverId)
            .orElseThrow(() -> new RuntimeException("Receiver not found"));

    if (sender.getBalance() < amount) {
        return "Insufficient balance.";
    }

    sender.setBalance(sender.getBalance() - amount);
    receiver.setBalance(receiver.getBalance() + amount);

    userRepository.save(sender);
    userRepository.save(receiver);

    Transaction transaction = new Transaction(senderId, receiverId, amount, LocalDateTime.now());
    transactionRepository.save(transaction);

    return "Transaction successful.";
}

 
}
