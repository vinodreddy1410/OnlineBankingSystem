package com.bank.bankingapp.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Long senderId;
    private Long receiverId;
    private double amount;
    private LocalDateTime timestamp;

    public Transaction() {}

    public Transaction(Long senderId, Long receiverId, double amount, LocalDateTime timestamp) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.amount = amount;
        this.timestamp = timestamp;
    }
    public Long getId() {
    return id;
}

public Long getSenderId() {
    return senderId;
}

public void setSenderId(Long senderId) {
    this.senderId = senderId;
}

public Long getReceiverId() {
    return receiverId;
}

public void setReceiverId(Long receiverId) {
    this.receiverId = receiverId;
}

public double getAmount() {
    return amount;
}

public void setAmount(double amount) {
    this.amount = amount;
}

public LocalDateTime getTimestamp() {
    return timestamp;
}

public void setTimestamp(LocalDateTime timestamp) {
    this.timestamp = timestamp;
}


    // Getters and Setters
    // (I'll add them for you if you need)
}