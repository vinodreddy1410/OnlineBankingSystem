package com.bank.bankingapp.repository;

import com.bank.bankingapp.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findBySenderIdOrReceiverId(Long senderId, Long receiverId);
    List<Transaction> findTop5ByOrderByTimestampDesc();
    List<Transaction> findTop5BySenderIdOrReceiverIdOrderByTimestampDesc(Long senderId, Long receiverId);

}