import 'package:flutter/material.dart';

class SearchScreen extends StatelessWidget {
  const SearchScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Text(
        'Search',
        style: TextStyle(
          fontSize: 30, fontWeight: FontWeight.bold, color: Colors.white),
    ));
  }
}
