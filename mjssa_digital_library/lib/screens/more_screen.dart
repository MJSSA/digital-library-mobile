import 'package:flutter/material.dart';

class MoreScreen extends StatelessWidget {
  const MoreScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Text(
        'More',
        style: TextStyle(
          fontSize: 30, fontWeight: FontWeight.bold, color: Colors.white),
    ));
  }
}
