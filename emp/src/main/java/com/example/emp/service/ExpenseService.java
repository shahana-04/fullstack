package com.example.emp.service;


import com.example.emp.model.Expense;
import com.example.emp.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public Expense createExpense(Expense expense) {

        expense.setStatus("PENDING");
        return expenseRepository.save(expense);
    }

    public List<Expense> getMyExpenses(Long userId) {
        return expenseRepository.findByUserId(userId);
    }

    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    public Expense approveExpense(Long id) {

        Expense expense = expenseRepository.findById(id).get();
        expense.setStatus("APPROVED");
        return expenseRepository.save(expense);
    }

    public Expense rejectExpense(Long id) {

        Expense expense = expenseRepository.findById(id).get();
        expense.setStatus("REJECTED");
        return expenseRepository.save(expense);
    }
}
