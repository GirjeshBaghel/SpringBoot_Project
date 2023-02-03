package com.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dao.CustomerRepository;
import com.entity.Customer;
import com.entity.Order;
import com.entity.OrderItem;

@Service
public class OrderService {

    private static final int ORDERS_FOR_10_PERCENT_DISCOUNT = 10;
    private static final int ORDERS_FOR_20_PERCENT_DISCOUNT = 20;
    private static final double BFCM_DISCOUNT = 0.15;

    private CustomerRepository customerRepository;

    public OrderService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Order placeOrder(long customerId, List<OrderItem> items, boolean isBFCM) {
        Customer customer = customerRepository.findById(customerId);
        int numberOfOrders = customer.getOrders().size();

        double discount = 0;
        if (numberOfOrders >= ORDERS_FOR_20_PERCENT_DISCOUNT) {
            discount = 0.2;
        } else if (numberOfOrders >= ORDERS_FOR_10_PERCENT_DISCOUNT) {
            discount = 0.1;
        }

        if (isBFCM) {
            discount += BFCM_DISCOUNT;
        }

        double total = items.stream().mapToDouble(item -> item.getPrice() * item.getQuantity()).sum();
        double discountedTotal = total - (total * discount);

        Order order = new Order();
        order.setCustomer(customer);
        order.setItems(items);
        order.setDiscount(discount);
        order.setTotal(discountedTotal);

        customer.getOrders().add(order);
        customerRepository.save(customer);

        return order;
    }
}

