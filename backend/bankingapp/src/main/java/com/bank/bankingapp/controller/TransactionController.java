package com.bank.bankingapp.controller;

import com.bank.bankingapp.model.Transaction;
import com.bank.bankingapp.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // or 3000/3001 based on frontend port
@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepository;

    
    @GetMapping("/user/{userId}")
public List<Transaction> getUserTransactions(@PathVariable Long userId) {
    return transactionRepository.findTop5BySenderIdOrReceiverIdOrderByTimestampDesc(userId, userId);
}
}
